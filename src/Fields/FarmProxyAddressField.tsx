import {useRecordContext, UseRecordContextParams} from "react-admin";
import {Farm} from "../ITokensFarm";

export const FarmProxyAddressField = (props: UseRecordContextParams<Farm> | undefined) => {
    const record = useRecordContext<Farm>(props);
    if(!record) {
        return null
    }

    return <a rel={'noreferrer'} href={`${record.network.etherscanLink}/address/${record.farmProxyAddress}`} target={'_blank'}>
        {record.farmProxyAddress}
    </a>
}

FarmProxyAddressField.defaultProps = {label: 'Farm Proxy Address', source: 'farmProxyAddress'}