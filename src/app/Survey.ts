import { Question } from 'src/app/Question';
import { Option } from 'src/app/Option';

export class Survey{
    surveyId: number;
    surveyName: String;
    surveyDesc: String;
    surveyQuestions: Array<Question>;
    startDate: String;
}