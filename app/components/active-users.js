import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { getDatabase, ref, onValue, runTransaction } from 'firebase/database';

export default class ActiveUsersComponent extends Component {
  @tracked activeCount = 0;
  activeRef;

  constructor(owner, args) {
    super(owner, args);
    const database = getDatabase();
    this.activeRef = ref(database, 'activeUsers');

    // Increment the active users count when component is created
    runTransaction(this.activeRef, (currentData) => {
      return (currentData || 0) + 1;
    });

    // Listen to the count changes
    onValue(this.activeRef, (snapshot) => {
      this.activeCount = snapshot.val() || 0;
    });

    // Attach an event listener to window to decrement the count on close/unload
    window.addEventListener(
      'beforeunload',
      this.decrementActiveUser.bind(this),
    );
  }

  willDestroy() {
    super.willDestroy();
    this.decrementActiveUser();
    window.removeEventListener(
      'beforeunload',
      this.decrementActiveUser.bind(this),
    );
  }

  decrementActiveUser() {
    // Decrement the active users count when component is destroyed or on window unload
    runTransaction(this.activeRef, (currentData) => {
      return (currentData || 1) - 1;
    });
  }
}
