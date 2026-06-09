import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

export default function Stars({ rating, textAlign = 'left' }) {
  if (!rating || rating < 1 || rating > 5) return null;
  
  const alignClasses = textAlign === 'center'
    ? 'flex justify-center'
    : textAlign === 'right'
    ? 'flex justify-end'
    : 'flex justify-start';
  
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <StarIcon key={i} className="w-24 h-24 text-grey-800" aria-hidden="true" />
      );
    } else {
      stars.push(
        <StarOutlineIcon key={i} className="w-24 h-24 text-grey-800" aria-hidden="true" />
      );
    }
  }
  
  return (
    <div className={`${alignClasses} gap-4`} role="img" aria-label={`Rating: ${rating} out of 5 stars`}>
      {stars}
    </div>
  );
}
