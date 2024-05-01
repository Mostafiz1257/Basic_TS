{

    //spread operator in TS
    const list1: number[] = [3, 2, 4, 2,];
    const list2: number[] = [3, 2, 3, 4, 3];
    list2.push(...list1);

    const mentors1 = {
        ts: "Mostafiz",
        java: "Rahman",
        Redux: "Mezba"
    }
    const mentors2 = {
        Next: "Nihad",
        Prisma: "firoz"
    }
    const totalMentors = { ...mentors1, mentors2 }
    console.log(totalMentors);


    //Rest operator
    const allFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hello my all friends ${friend}`))
    }
    allFriends("Mostafiz", "Hahis", "Zamam")

}