export class Task {

    public isDone: boolean;

    constructor(
        public id: number,
        public description: string,
        public dateFrom: Date,
        public dateTo: Date
    ){
      this.isDone = false;
    }

    public markAsDone(){
        this.isDone = true;
    }

    public markAsNotDone(){
        this.isDone = false;
    }



}