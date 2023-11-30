import {useRecordContext, UseRecordContextParams} from "react-admin";

export const RewardTokenIconsField = (props: UseRecordContextParams<{ rewardTokenIcons: string[]; }> | undefined) => {
    const record = useRecordContext<{rewardTokenIcons: string[]}>(props);
    if(!record) {
        return null
    }
    return <>
        {record.rewardTokenIcons.map(src => (
            <img
                src={src}
                key={src}
                width={25}
                height={25}
            />
        ))}
    </>
}

RewardTokenIconsField.defaultProps = {label: "Reward Token Icons", source: 'rewardTokenIcons'}