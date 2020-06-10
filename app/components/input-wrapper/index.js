import { tracked } from "@glimmer/tracking"
import { action } from "@ember/object"
import Component from "@glimmer/component"

export default class InputWrapperComponent extends Component {
  @tracked isInputVisible = true

  // Tear down the <input> on pressing enter
  @action onKeyPress(event) {
    if (event.keyCode === 13) {
      this.isInputVisible = false
    }
  }

  // Tear down the <input> on blur
  @action onBlur() {
    this.isInputVisible = false
  }
}
