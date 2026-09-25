export type IRegisterInfo = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type IUserInfo = {
    id: string,
    username: string,
    email: string,
    emailVerified: boolean,
    reputation: number,
    stars: number,
    totalReports: number
}

type Route = { id: string, name: string, place: string, kind: string }

export type journey = {
    id: string,
    variantId: string,
    name: string,
    mode: "danfo" | "keke" | "okada" | "brt" | "ferry" | "rail"
    direction: string,
    from: Route,
    to: Route,
    via: Route[],
    estimatedFare: { period: string, expected: number, range: { min: number, max: number }, sampleSize: number, source: string },
    estimatedDurationMinutes: number,
    distanceKm: number,
    matching: {}
}