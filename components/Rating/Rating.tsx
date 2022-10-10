import {RatingProps} from "./RatingProps";
import cn from "classnames";
import styles from "./Rating.module.css";
import StarIcon from './star.svg';
import {useEffect, useState, KeyboardEvent} from "react";

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps) => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
        console.log(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
          const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
              return <span  className={cn(styles.star, {
                          [styles.filled]: i < currentRating,
                          [styles.editable]: isEditable,
                      })}
                            onMouseEnter={()=> changeDisplay(i + 1)}
                            onMouseLeave={()=> changeDisplay(rating)}
                            onClick={()=> {
                                onCLick(i + 1),
                                styles.focus;
                            }}>
                  <StarIcon


                      tabIndex={isEditable ? 0 : -1}
                      onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(e, i + 1)}

                  />
              </span>;

          });
        setRatingArray(updateArray);
    };

    const changeDisplay = (i: number) => {
        if(!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onCLick = (i: number) => {
        if(!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (e: KeyboardEvent<SVGElement>, i: number) => {
        if (e.code != "Space" || !setRating) {
            return;
        }
        setRating(i);
    };

    return (
        <div {...props}>
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
        </div>
    );
};
