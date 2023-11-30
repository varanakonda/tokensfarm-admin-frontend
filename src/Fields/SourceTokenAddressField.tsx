import {useRecordContext, UseRecordContextParams} from "react-admin";
import {Farm} from "../ITokensFarm";

export const SourceTokenAddressField = (props: UseRecordContextParams<Farm> | undefined) => {
    const record = useRecordContext<Farm>(props);
    if(!record) {
        return null
    }

    return <a rel={'noreferrer'} href={`${record.network.etherscanLink}/address/${record.sourceTokenAddress}`} target={'_blank'}>
        {record.sourceTokenAddress}
    </a>
}

SourceTokenAddressField.defaultProps = {label: 'Source Token Address', source: 'sourceTokenAddress'}