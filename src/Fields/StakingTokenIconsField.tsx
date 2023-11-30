import {useRecordContext, UseRecordContextParams} from "react-admin";

export const StakingTokenIconsField = (props: UseRecordContextParams<{ stakingTokenIcons: string[]; }> | undefined) => {
    const record = useRecordContext<{stakingTokenIcons: string[]}>(props);
    if(!record) {
        return null
    }
    return <>
        {record.stakingTokenIcons.map(src => (
            <img
                src={src}
                key={src}
                width={25}
                height={25}
            />
        ))}
    </>
}

StakingTokenIconsField.defaultProps = {label: "Staking Token Icons", source: 'stakingTokenIcons'}