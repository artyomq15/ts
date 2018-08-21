export class Task {
    private id: number;
    private description: string;
    private isDone: boolean;
    private dateFrom: Date;
    private dateTo: Date;

    constructor(id: number, description: string, dateFrom: Date, dateTo: Date){
        this.id = id;
        this.description = description;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.isDone = false;
    }

    public getId(){
        return this.id;
    }

    public markAsDone(){
        this.isDone = true;
    }

    public markAsNotDone(){
        this.isDone = false;
    }



}