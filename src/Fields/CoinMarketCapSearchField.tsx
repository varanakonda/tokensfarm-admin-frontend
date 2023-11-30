import {useRecordContext, UseRecordContextParams} from "react-admin";

export const CoinMarketCapSearchField = (props: UseRecordContextParams<{ symbol: string; }> | undefined) => {
    const record = useRecordContext<{symbol: string}>(props);
    if(!record) {
        return null
    }
    return <a target={'_blank'} rel="noreferrer"  href={`https://coinmarketcap.com/community/search/latest/?q=${record.symbol}`}>
        {record.symbol}
    </a>
}

CoinMarketCapSearchField.defaultProps = {label: "Coin Market Cap Search", source: 'symbol'}