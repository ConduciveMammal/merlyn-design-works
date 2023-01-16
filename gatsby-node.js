exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  actions.createSlice({
    id: `header`,
    component: require.resolve(`./src/components/structure/header.jsx`),
  })

  actions.createSlice({
    id: `footer`,
    component: require.resolve(`./src/components/structure/footer.jsx`),
  })
}


