import Quill from 'quill';

const Inline = Quill.import('blots/inline');

class Entity extends Inline {
	static create(data) {
		const node = super.create(data);
		node.setAttribute('href', '#');
		node.setAttribute('data-entity-id', data.id);
		node.setAttribute('data-entity-content', data.content);
		node.setAttribute('spellcheck', false);
		node.setAttribute('data-toggle', "popover");
		return node;
	}
}

Entity.blotName = 'entity';
Entity.tagName = 'A';
Entity.className = 'ql-entity';

Quill.register(Entity);
