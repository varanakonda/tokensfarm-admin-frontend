import {Identifier, RaRecord, UseRecordContextParams, useRecordContext} from "react-admin";

export const ColorTextField = (props: UseRecordContextParams<RaRecord<Identifier>> | undefined) => {
    const record = useRecordContext(props);
    if(!record) {
        return null
    }
    return <span style={{color: record[props.source]}}>
        {record[props.source]}
    </span>
}
