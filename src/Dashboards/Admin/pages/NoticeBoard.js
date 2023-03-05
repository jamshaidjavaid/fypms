import NoticeBoardComponent from "../../../Components/NoticeBoards/NoticeBoardComponent";

const NOTICE_BOARD = [
  {
    headline: "Presentations will be held on Friday, 09-02-23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    recieverEntity: "Class",
    reciever: "BSIT-Mor-Fall (2019-23)",
    id: 1,
  },
  {
    headline: "Presentations will be held on Friday, 09-02-23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    recieverEntity: "Class",
    reciever: "BSIT-Mor-Fall (2019-23)",
    id: 2,
  },
  {
    headline: "Presentations will be held on Friday, 09-02-23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    recieverEntity: "Class",
    reciever: "BSIT-Mor-Fall (2019-23)",
    id: 3,
  },
  {
    headline: "Presentations will be held on Friday, 09-02-23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    recieverEntity: "Class",
    reciever: "BSIT-Mor-Fall (2019-23)",
    id: 4,
  },
  {
    headline: "Presentations will be held on Friday, 09-02-23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    recieverEntity: "Class",
    reciever: "BSIT-Mor-Fall (2019-23)",
    id: 5,
  },
  {
    headline: "Presentations will be held on Friday, 09-02-23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    recieverEntity: "Class",
    reciever: "BSIT-Mor-Fall (2019-23)",
    id: 6,
  },
  {
    headline: "Presentations will be held on Friday, 09-02-23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    recieverEntity: "Class",
    reciever: "BSIT-Mor-Fall (2019-23)",
    id: 7,
  },
];

const NoticeBoard = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <NoticeBoardComponent
        reciever={true}
        notices={NOTICE_BOARD}
        wide={true}
      />
    </div>
  );
};

export default NoticeBoard;
