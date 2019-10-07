export default function attachModelCreator(createModel, creator) {
  createModel.create = creator;
  return createModel;
}