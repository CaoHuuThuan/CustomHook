export type UserInfoProps={
    id:string,
    username:string|null,
    phone:string|null,
    email:string|null,
}
export type FetchValueProps={
    loading: boolean;
    data: UserInfoProps[] | undefined;
    error: string | null;
}