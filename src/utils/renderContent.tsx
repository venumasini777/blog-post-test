// src/utils/renderContent.tsx
import type { ContentNode, DocumentNode, SubContentNode } from '../types/contentful';

function renderContent(content: ContentNode | SubContentNode | DocumentNode): any {
  if ((content as SubContentNode).nodeType === 'text') {
    return (content as SubContentNode).value;
  }
  if((content as ContentNode)){
    const node = content as ContentNode;
    //console.log(content);
    //console.log("hi2" + node.nodeType);
    if(node.nodeType){
        switch (node.nodeType) {
            case 'paragraph':
            return `<p>${node.content.map(renderContent).join('')}</p>`;
            case 'heading-2':
            return `<h2>${node.content.map(renderContent).join('')}</h2>`;
            case 'unordered-list':
            return `<ul>${node.content.map(renderContent).join('')}</ul>`;
            case 'list-item':
            return `<li>${node.content.map(renderContent).join('')}</li>`;
            default:
            return node.content.map(renderContent).join('');
        }
    }
    return '';
    
  }
  if((content as DocumentNode)){
    const node = content as DocumentNode;
    if(node.content){
        return `<div>${node.content.map(renderContent).join('<br>')}</div>`
    }
    return '';
  }
  
}

export { renderContent };
