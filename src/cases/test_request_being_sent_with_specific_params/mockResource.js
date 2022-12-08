export const resourceFixture = [
  { id: 1, name: "Res1" },
  { id: 2, name: "Res2" },
  { id: 3, name: "Res3" },
  { id: 4, name: "Res4" },
  { id: 5, name: "TestRes1" },
  { id: 6, name: "TestRes2" },
  { id: 7, name: "TestRes3" },
  { id: 8, name: "TestRes4" },
];

export const filteredResourceFixture = [
  { id: 5, name: "TestRes1" },
  { id: 6, name: "TestRes2" },
  { id: 7, name: "TestRes3" },
  { id: 8, name: "TestRes4" },
];
const filterParamsFixture = { filter: { name: "Te", operator: "starts_with" } };

export const mockResource = ({ mock, overrides = {} }) => {
  const {
    resource = [200, resourceFixture],
    filteredResource = [200, filteredResourceFixture],
    filterParams = filterParamsFixture,
  } = overrides;
  mock
    .onGet("/api/resource", { params: filterParams })
    .reply(...filteredResource);
  mock.onGet("/api/resource").reply(...resource);
};
