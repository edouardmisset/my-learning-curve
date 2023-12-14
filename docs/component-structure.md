**Source**: This is from this [medium article](https://rahuulmiishra.medium.com/react-worst-practices-bdf924efe470)

## **Import** Order:

- Third Party Libraries
- Custom Components
- Utils Imports
- Constant imports
- Image Imports
- Create file specific Constants

(Separate each import category by one empty line)

## Rules for **Components**:

- Very first line — destructure Props (if any)
- Grab the translation function — `useTranslation` / `useT` (if used)
- Destructure redux state — `useAppSelector`
- Initialize State Variables — `useState`
- Create Refs — `useRef`
- Initialize hooks — `useAppDispatch`
- Write all side effects — `useEffects`
- Create `const`/`let` specific to the Component
- Function definition — (if any)

(Separate each section by one empty line)
