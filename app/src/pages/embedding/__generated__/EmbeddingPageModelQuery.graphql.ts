/**
 * @generated SignedSource<<d8fbd835f366cb8e01e8fa874e635509>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EmbeddingPageModelQuery$variables = Record<PropertyKey, never>;
export type EmbeddingPageModelQuery$data = {
  readonly model: {
    readonly " $fragmentSpreads": FragmentRefs<"MetricSelector_dimensions">;
  };
};
export type EmbeddingPageModelQuery = {
  response: EmbeddingPageModelQuery$data;
  variables: EmbeddingPageModelQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "EmbeddingPageModelQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "InferenceModel",
        "kind": "LinkedField",
        "name": "model",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MetricSelector_dimensions"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "EmbeddingPageModelQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "InferenceModel",
        "kind": "LinkedField",
        "name": "model",
        "plural": false,
        "selections": [
          {
            "alias": "numericDimensions",
            "args": [
              {
                "kind": "Literal",
                "name": "include",
                "value": {
                  "dataTypes": [
                    "numeric"
                  ]
                }
              }
            ],
            "concreteType": "DimensionConnection",
            "kind": "LinkedField",
            "name": "dimensions",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "DimensionEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Dimension",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "type",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "dimensions(include:{\"dataTypes\":[\"numeric\"]})"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fd9d393b5de6aab89ac3f91ac93def55",
    "id": null,
    "metadata": {},
    "name": "EmbeddingPageModelQuery",
    "operationKind": "query",
    "text": "query EmbeddingPageModelQuery {\n  model {\n    ...MetricSelector_dimensions\n  }\n}\n\nfragment MetricSelector_dimensions on InferenceModel {\n  numericDimensions: dimensions(include: {dataTypes: [numeric]}) {\n    edges {\n      node {\n        id\n        name\n        type\n      }\n    }\n  }\n}\n"
  }
};

(node as any).hash = "374499f7f8ce6919e4a0a4ecbe380c52";

export default node;
