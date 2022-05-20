export class Rol{
    constructor(
        public id: number, 
        public name: string,
        //
        public create_by:string,
        public created_at:Date,
        public updated_at:Date,
    ){}
}