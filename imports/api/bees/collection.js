// Framework
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class BeesCollection extends Mongo.Collection {
  insert(bee, callback) {
    // How many bee documents exist?
    const beesCursor = Bees.find({});
    const numberOfBees = beesCursor.count();
    const newNumberOfBees = numberOfBees + 1;
    // What should the name of the new bee be?
    const beeName = bee.name ? bee.name : `Bee #${newNumberOfBees}`;
    // What will the final state of the new bee object be?
    const alteredBee = { ...bee, name: beeName };
    // What is the id of the new bee object?
    const result = super.insert(alteredBee, callback);
    return result;
  }
}

export const Bees = new BeesCollection('Bees');

export default Bees;
