// biome-ignore lint/suspicious/noExplicitAny: ... because it's a helper file
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
/**
 * @description Searches a tree of nodes for a node that matches the given search term.
 *
 * This function takes a node and a search term, and searches the node and its sub-nodes for a node where `node[searchItemField]` equals `searchTerm`.
 * It returns the first matching node, or `undefined` if no such node is found.
 *
 * This function uses the {@link searchTreeList} function to search a list of nodes.
 *
 * @template NodeType A type that extends `BasicNode`. This is the type of the nodes in the tree.
 *
 * @param {SearchTreeParameters<NodeType>} params The parameters for the search. This is an object that contains:
 * - `node`: The root node of the tree to search.
 * - `searchTerm`: The term to search for.
 * - `subItemsField`: The name of the field that contains the sub-nodes of a node.
 * - `searchItemField`: The name of the field to compare with the search term.
 *
 * @returns {undefined | NodeType} The first node where `node[searchItemField]` equals `searchTerm`, or `undefined` if no such node is found.
 *
 * @example
 * const node = { id: 1, name: 'Node 1', children: [{ id: 2, name: 'Node 2' }] };
 * const params = { node, searchTerm: 'Node 2', subItemsField: 'children', searchItemField: 'name' };
 * const foundNode = searchTree(params); // { id: 2, name: 'Node 2' }
 */
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
}

/**
 * @description Searches a list of nodes for a node that matches the given search term.
 *
 * This function iterates over a list of nodes and uses the `searchTree` function to search each node and its sub-nodes.
 * It returns the first node where `node[searchItemField]` equals `searchTerm`, or `undefined` if no such node is found.
 *
 * This function uses the {@link searchTree} function to search each node.
 *
 * @template NodeType A type that extends `BasicNode`. This is the type of the nodes in the list.
 *
 * @param {SearchTreeListParameters<NodeType>} params The parameters for the search. This is an object that contains:
 * - `nodeList`: The list of nodes to search.
 * - `searchTerm`: The term to search for.
 * - `subItemsField`: The name of the field that contains the sub-nodes of a node.
 * - `searchItemField`: The name of the field to compare with the search term.
 *
 * @returns {undefined | NodeType} The first node where `node[searchItemField]` equals `searchTerm`, or `undefined` if no such node is found.
 *
 * @example
 * const nodes = [{ id: 1, name: 'Node 1', children: [{ id: 2, name: 'Node 2' }] }];
 * const params = { nodeList: nodes, searchTerm: 'Node 2', subItemsField: 'children', searchItemField: 'name' };
 * const foundNode = searchTreeList(params); // { id: 2, name: 'Node 2' }
 */
export function searchTreeList<NodeType extends BasicNode = BasicNode>(
  params: SearchTreeListParameters<NodeType>,
): undefined | NodeType {
  const { nodeList, searchTerm, subItemsField, searchItemField } = params

  let foundNode: undefined | NodeType
  for (const node of nodeList) {
    foundNode = searchTree({
      node,
      searchTerm,
      subItemsField,
      searchItemField,
    })
    if (foundNode) return foundNode
  }
}
