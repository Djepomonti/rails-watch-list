import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Créez vos listes de film par thème", "Organisez votre filmothéque"],
      typeSpeed: 50,
      loop: true
    })
  }
}
