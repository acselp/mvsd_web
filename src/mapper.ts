import type {CsvModel, TableModel} from "@/type.ts";

export const Mapper = {
    map(model: CsvModel[]): TableModel[] {
        return model.map(x => {
            return {
                lor: x['LOR '],
                gre: x['GRE Score'],
                sop: x['SOP'],
                chance: x['Chance of Admit '],
                research: x['Research'],
                toefel: x['TOEFL Score'],
                cgpa: x['CGPA'],
                uniRating: x['University Rating'],
                id: x['Serial No.'],
            } as TableModel;
        })
    },

    mapInverse(model: TableModel[]): CsvModel[] {
        return model.map(x => {
            return {
                'GRE Score': x.gre,
                'TOEFL Score': x.toefel,
                'University Rating': x.uniRating,
                'SOP': x.sop,
                'LOR ': x.lor,
                'CGPA': x.cgpa,
                'Research': Number(x.research),
            } as CsvModel;
        });
    },
}