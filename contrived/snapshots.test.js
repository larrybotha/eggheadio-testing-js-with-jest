import React from 'react';
import renderer from 'react-test-renderer';
import {
  makeSomeRequestAndGetSomeResponse,
  getFilteredStuff,
  MyComponent,
} from './snapshots';

// we can test objects
test('objects', async () => {
  // if the response is different to the committed snapshot, Jest will
  // indicate there's an error, and show the diff of the effected snapshot
  const httpResponse = await makeSomeRequestAndGetSomeResponse();

  // toMatchSnapshot() first creates a snapshot if none exists, and then
  // compares the snapshot to the result when it does exist
  expect(httpResponse).toMatchSnapshot();
});

test('arrays', () => {
  // we can test arrays using snapshots, too
  const someFilteredList = getFilteredStuff('filter');

  expect(someFilteredList).toMatchSnapshot();
});

test('jsx', () => {
  // and also React components, because a rendered component is just an object.
  // What's also cool here is that react-test-renderer allows one to render
  // React components to JS objects without the need for a DOM
  // In the docs react-test-renderer is mentioned as being useful for getting
  // objects as snapshots - is it useful in other ways?
  // Nope! React docs say it's good for traversing nodes and making assertions!
  // No need for enzyme? How about events? Perhaps it's not the correct tool for
  // that.
  const component = renderer.create(<MyComponent name="John" />);

  expect(component).toMatchSnapshot();
});
