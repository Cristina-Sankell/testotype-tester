import { getUsers } from '../src/getUsers';

describe('getUsers function', () => {
  it('should return user data in a Promise', async () => {
    const usersData = await getUsers();
    expect(usersData).toEqual([
    { "name": "Erik", "group": 1 },
      { "name": "Lisa", "group": 2 },
      { "name": "Hampus", "group": 2 },
      { "name": "Erik", "group": 2 },
      { "name": "Linda", "group": 3 },
      { "name": "Eva", "group": 1 },
      { "name": "Anna", "group": 3 }
    ]);
  });
});
