import Quill from 'quill';

const Embed = Quill.import('blots/embed');


class JgaEntityBlot extends Embed {
	static create(data) {
		const node = super.create();
		// some reason the blot receives `data.tags` as a string
		// coerce to an array and move on
		const tags = String(data.tags).split(",");
		const [prefix, suffix] = tags;
		const denotationCharPrefix = document.createElement('span');
		denotationCharPrefix.className = 'ql-entity-tag-char';
		denotationCharPrefix.innerHTML = prefix;
		node.appendChild(denotationCharPrefix);

		node.innerHTML += data.value;

		const denotationCharSuffix = document.createElement('span');
		denotationCharSuffix.className = 'ql-entity-tag-char';
		denotationCharSuffix.innerHTML = suffix;
		node.appendChild(denotationCharSuffix);
		return JgaEntityBlot.setDataValues(node, data);
	}

	static setDataValues(element, data) {
		const domNode = element;
		Object.keys(data).forEach((key) => {
			domNode.dataset[key] = data[key];
		});
		return domNode;
	}

	static value(domNode) {
		return domNode.dataset;
	}
}

JgaEntityBlot.blotName = 'entity';
JgaEntityBlot.tagName = 'span';
JgaEntityBlot.className = 'entity';

Quill.register(JgaEntityBlot);
