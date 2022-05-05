import { FeedbackType, feedbackTypes } from "../..";

interface onFeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: onFeedbackTypeStepProps) {
    return (
        <div className=" flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([Key, value]) => {
            return (
                <button
                key={Key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                onClick={() => onFeedbackTypeChanged(Key as FeedbackType)}
                type="button">
                    <img src={value.image.source} alt={value.image.alt} />
                    <span>{value.title}</span>
                </button>
            )
        }) }
    </div>
    )
}