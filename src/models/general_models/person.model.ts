export class Rol{
    constructor(
        public id: number, 
        public name: string,
        public telephone: string,
        public document: string,
        public rol_id: number,
        //
        public create_by:string,
        public created_at:Date,
        public updated_at:Date,
    ){}
}