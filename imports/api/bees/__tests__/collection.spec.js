// //import { Factory } from 'meteor/dburles:factory';
// //import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
// import { ValidatedMethod } from "meteor/mdg:validated-method";
// //import { _ } from 'meteor/underscore';
import { Bees } from '../collection';

describe('collection', function() {
  it('tests the collection', () => {
    const bee = { userId: Meteor.userId(), name: 'bee1', type: 'worker' };
    const callback = jest.fn();
    Bees.insert(bee, callback);
    expect(Bees.find).toHaveBeenCalledWith({});
    expect(Mongo.Collection.prototype.insert).toHaveBeenCalledWith(
      bee,
      callback
    );
  });
});
