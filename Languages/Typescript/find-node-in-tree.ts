type BasicNode = Record<string, any>

interface SearchTreeParameters<NodeType extends BasicNode = BasicNode> {
  node: NodeType
  searchTerm: string
  subItemsField: keyof NodeType
  searchItemField: keyof NodeType
}

type SearchTreeListParameters<NodeType extends BasicNode = BasicNode> = Omit<
  SearchTreeParameters<NodeType>,
  'node'
> & {
  nodeList: NodeType[]
}

export const searchTree = <NodeType extends BasicNode = BasicNode>(
  params: SearchTreeParameters<NodeType>,
): undefined | NodeType => {
  const { node, searchTerm, subItemsField, searchItemField } = params

  if (!(subItemsField in node)) {
    throw new TypeError(`${subItemsField.toString()} is missing from NodeType`)
  }
  if (!(searchItemField in node)) {
    throw new TypeError(
      `${searchItemField.toString()} is missing from NodeType`,
    )
  }

  if (node[searchItemField] === searchTerm) return node

  if (node[subItemsField] != null && node[subItemsField]?.length > 0) {
    return searchTreeList({
      nodeList: node[subItemsField],
      searchTerm,
      subItemsField,
      searchItemField,
    })
  }
  return undefined
}

export function searchTreeList<NodeType extends BasicNode = BasicNode>(
  params: SearchTreeListParameters<NodeType>,
): undefined | NodeType {
  const { nodeList, searchTerm, subItemsField, searchItemField } = params

  let foundNode: undefined | NodeType
  // eslint-disable-next-line no-restricted-syntax
  for (const node of nodeList) {
    foundNode ??= searchTree({
      node,
      searchTerm,
      subItemsField,
      searchItemField,
    })
    if (foundNode) return foundNode
  }
  return foundNode
}
