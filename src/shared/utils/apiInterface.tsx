// API 명세에 맞는 Interface를 모아두는 곳
// 네이밍 : {API명} + {Request/Response}

// response의 경우, error 필드가 존재하는지를 먼저 확인하는 작업이 필요하다

// register API
export interface usersRegisterRequest {
    email: string;
    username: string;
    password: string;
}

export interface usersRegisterResponse {
    accessToken: string;
}

// login API
export interface usersLoginRequest {
    email: string;
    password: string;
}

export interface usersLoginResponse {
    id : string;
    username: string;
    token: string;
    email : string;
}

// Friend API
export interface friendsRequestsRequest { // 친구 요청
    targetEmailAddresses: string[]; // 친구 요청을 보낼 이메일 주소 배열
}

export interface friendsRequestsAcceptRequest { // 친구 요청 수락
    targetEmailAddress: string; // 친구 요청을 보낸 이메일 주소
}

export interface friendsRequestsRejectRequest { // 친구 요청 거절
    targetEmailAddress: string; // 친구 요청을 보낸 이메일 주소
}

// Main API
export interface mainGetResponse {
    friends: string[]; // 친구 ID 가 담길 배열
}

// Room API

// 음식 카테고리 모드 API
export interface sendFoodCategorySpeechRequest {
    userSpeech: string;
}

export interface sendFoodCategoryButtonRequest {
    categoryId: string;
    isDelete: boolean;
}

// 무드 키워드 모드 API
export interface MoodKeyword{
    name : string,
    id : string,
}

// 무드 키워드 모드 시 요청할 get API
export interface getMoodKeywordResponse {
    moodKeywords: MoodKeyword[];
}

export interface sendMoodKeywordButtonRequest {
    keywordId: string;
    isDelete: boolean;
}

export interface sendMoodKeywordSpeechRequest {
    userSpeech: string;
}

// 교집합 식당 추천 모드 API
export interface intersectRestaurant{
    restId : string,
    restName : string,
    rating : number,
    address : string,
    thumbnailURL : string,
}

// 교집합 식당 추천 모드 get 요청
export interface getKeywordToRestsResponse {
    restaurants: intersectRestaurant[];
}

export interface postKeywordToRestsRequest {
    restId: string;
    slotIndex: number;
}

// 의사결정 모드 API
export interface decisionRestaurant{
    restId : string,
    restName : string,
    rating : number,
    address : string,
    thumbnailURL : string,
    reviews : string[],
    menus : string[],
}

// 의사결정 모드 get 요청
export interface getDecisionRestsResponse {
    restaurants: decisionRestaurant[];
}

export interface postDecisionRestsRequest {
    restId: string;
    isAgree : boolean;
}

// 결과 모드 API
export interface resultRestaurant{
    restId : string,
    restName : string,
    rating : number,
    address : string,
    thumbnailURL : string,
    reviews : string[],
    menus : string[],
    choice : boolean[],
}

// 결과 모드 get 요청
export interface getResultRestsResponse {
    pickRest : resultRestaurant
    restaurants: resultRestaurant[];
}
