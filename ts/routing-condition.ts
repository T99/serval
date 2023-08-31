/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:16 PM -- August 28th, 2023
 * Project: serval
 */

export type RoutingCondition<I> = (request: I) => boolean;
