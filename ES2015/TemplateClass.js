class TemplateClass {
	constructor(value) {
		this.TemplateValue = value;
	}
	getTemplateValue() {
		return this.TemplateValue;
	}
	setTemplateValue(value) {
		this.TemplateValue = value;
	}
}

class TemplateChildClass extends TemplateClass {
	//staticな領域定義は出来ない。
	static staticFunction() {
		return 'staticFunction';
	}
	constructor(value) {
		super(value);
		this.TemplateValue = this.TemplateValue * 2;
	}

	getTemplateValue() {
		return super.TemplateValue() + 'childFunction';
	}
}

export{TemplateClass,TemplateChildClass};