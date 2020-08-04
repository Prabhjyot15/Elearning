export class Course {
  courseParamsPath: string;
  courseName: string;
  createdBy: string;
  lastUpdated: Date;
  whatYouWillLearn: [];
  requirements: [];
  description: string;
  thumbnailPath: string;
  content: [
    {
      chapterName: string;
      videos: [
        {
          videoTitle: string;
          videoUrl: string;
        }
      ];
    }
  ];
  tags: [];
  reviews: [
    {
      name: string;
      rating: number;
      comment: string;
    }
  ];
}

export class Video {
  courseParamsPath: string;
  courseName: string;
  content: [
    {
      chapterName: string;
      videos: [
        {
          videoTitle: string;
          videoUrl: string;
        }
      ];
    }
  ];
}
