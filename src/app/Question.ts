import { Option } from 'src/app/Option';

export class Question{
    questionId: number;
    question: String;
    questiontype: number;
    questionOptions: Array<Option>;
}