import { getGroups } from '../src/getGroups';

describe('getGroups function', () => {
  it('should return group data in a Promise', async () => {
    const groupsData = await getGroups();
    expect(groupsData).toEqual([
      { "id": 1, "groupName": "Hajarna" },
      { "id": 2, "groupName": "Valarna" },
      { "id": 3, "groupName": "Zebrorna" }
    ]);
  });
});
