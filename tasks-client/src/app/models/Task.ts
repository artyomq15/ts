export class Task {

    constructor(
        public id: number,
        public description: string,
        public isDone: boolean,
        public dateFrom: Date,
        public dateTo: Date
    ){

    }

}