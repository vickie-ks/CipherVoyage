import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { getDatabase, ref, onValue, runTransaction } from 'firebase/database';

export default class TotalVisitorsComponent extends Component {
  @tracked totalVisits = 0;
  visitRef;

  constructor(owner, args) {
    super(owner, args);
    const database = getDatabase();
    this.visitRef = ref(database, 'totalVisitors');

    // Check if the visitor has already been counted
    if (!localStorage.getItem('hasVisited')) {
      // Increment the total visits count only if they haven't been counted before
      runTransaction(this.visitRef, (currentData) => {
        return (currentData || 0) + 1;
      });
      localStorage.setItem('hasVisited', 'true'); // Set the flag in local storage
    }

    // Listen to the count changes
    onValue(this.visitRef, (snapshot) => {
      this.totalVisits = snapshot.val() || 0;
    });
  }
}
