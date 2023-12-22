export function getGroups(): Promise<object[]> {
    return new Promise((resolve) => {
      resolve([
        { "id": 1, "groupName": "Hajarna" },
        { "id": 2, "groupName": "Valarna" },
        { "id": 3, "groupName": "Zebrorna" }
      ]);
    });
  }
