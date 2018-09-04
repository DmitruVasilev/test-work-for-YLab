const generalList = [
  {
    title: "title 1",
    key: "1",
    subtitles: [
      {
        title: "title 1.1",
        key: "1.1",
        subtitles: [
          {
            title: "title 1.1.1",
            key: "1.1.1",
          },
          {
            title: "title 1.1.2",
            key: "1.1.2",
          },
          {
            title: "title 1.1.3",
            key: "1.1.3",
          },
        ],
      },
      {
        title: "title 1.2",
        key: "1.2",
      },
    ],
  },
  {
    title: "title 2",
    key: "2",
    subtitles: [
      {
        title: "title 2.1",
        key: "2.1",
        subtitles: [
          {
            title: "title 2.1.1",
            key: "2.1.1",
          },
        ],
      },
    ],
  },
];

export default (list = generalList) => list;
