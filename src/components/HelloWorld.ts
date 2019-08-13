import {Component, Prop, Vue} from 'vue-property-decorator';
import {isNil, isNumber} from 'lodash';

console.log(isNil(null));
console.log(isNil(1));
console.log(isNumber(2));

@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
}