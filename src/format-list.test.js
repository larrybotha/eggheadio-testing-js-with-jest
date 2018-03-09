import formatList from './format-list'

test('can format a list', () => {
  const formattedList = formatList(
    'Star Wars Names',
    [
      {name: 'Qui-Gon Jinn'},
      {name: 'Chewbacca'},
      {name: 'Han Solo'},
      {name: 'Luke Skywalker'},
    ],
    'name'
  )

  // .toMatchSnapshot() will create a snapshot, and then diff changes, and throw
  // an error if the snapshots don't match.
  // If you want to update a snapshot, Jest allows one to do so using 'u'.
  // Snapshots are serialised data that can be diffed against changes to a code-base.
  // It can be used for arrays, objects, and React components.
  expect(formattedList).toMatchSnapshot()
})
