import React from 'react';

import isStatelessComponent from './isStatelessComponent';

const wrapRenderMemo = new WeakMap();
export default function wrapRender(transformNode) {
  if(!wrapRenderMemo.has(transformNode)) {
    wrapRenderMemo.set(transformNode, new WeakMap());
  }
  const memo = wrapRenderMemo.get(transformNode);
  return (type) => {
    if(!memo.has(type)) {
      memo.set(type, (() => {
        if(isStatelessComponent(type)) {
          return class extends React.Component {
            static get propTypes() {
              return type.propTypes;
            }

            static get displayName() {
              return type.displayName || type.name;
            }

            render() {
              return transformNode(type(this.props));
            }
          };
        }
        return class extends type {
          render() {
            return transformNode(super.render());
          }
        };
      })());
    }
    return memo.get(type);
  };
}
