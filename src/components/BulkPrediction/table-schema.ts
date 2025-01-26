import {h, ref} from "vue";
import {NButton, NTag} from "naive-ui";
import type {TableModel} from "@/type.ts";

export const getTableSchema = (onPredict: Function) => {
    return {
        pagination: { pageSize: 8 },
        columns: [
            {
                title: "Id",
                key: "id",
            },
            {
                title: 'GRE Score',
                key: 'gre'
            },
            {
                title: 'TOEFEL Score',
                key: 'toefel',
            },
            {
                title: 'University rating',
                key: 'uniRating',
            },
            {
                title: 'SOP',
                key: 'sop',
            },
            {
                title: 'LOR',
                key: 'lor',
            },
            {
                title: 'CGPA',
                key: 'toefel',
            },
            {
                title: 'Has researches',
                key: 'research',
                render: (record: TableModel) => {
                    return h(
                        NTag,
                        {
                            type: record.research ? 'success' : 'error',
                            bordered: false,
                        },
                        {
                            default: record.research ? 'Yes' : 'No'
                        }
                    )
                }
            },
            {
                title: 'Probability to be admitted',
                key: 'chance',
            },
            {
                title: 'Actions',
                render: (record: TableModel) => {
                    return h(
                        NButton,
                        {
                            onClick: () => onPredict(record)
                        },
                        {
                            default: 'Predict'
                        },
                    )
                }
            }
        ]
    }
}