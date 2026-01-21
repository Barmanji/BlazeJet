import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Deployement
 *
 */
export type DeployementModel = runtime.Types.Result.DefaultSelection<Prisma.$DeployementPayload>;
export type AggregateDeployement = {
    _count: DeployementCountAggregateOutputType | null;
    _min: DeployementMinAggregateOutputType | null;
    _max: DeployementMaxAggregateOutputType | null;
};
export type DeployementMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    status: $Enums.DeployementStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DeployementMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    status: $Enums.DeployementStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DeployementCountAggregateOutputType = {
    id: number;
    projectId: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DeployementMinAggregateInputType = {
    id?: true;
    projectId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DeployementMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DeployementCountAggregateInputType = {
    id?: true;
    projectId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DeployementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Deployement to aggregate.
     */
    where?: Prisma.DeployementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Deployements to fetch.
     */
    orderBy?: Prisma.DeployementOrderByWithRelationInput | Prisma.DeployementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DeployementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Deployements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Deployements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Deployements
    **/
    _count?: true | DeployementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DeployementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DeployementMaxAggregateInputType;
};
export type GetDeployementAggregateType<T extends DeployementAggregateArgs> = {
    [P in keyof T & keyof AggregateDeployement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDeployement[P]> : Prisma.GetScalarType<T[P], AggregateDeployement[P]>;
};
export type DeployementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeployementWhereInput;
    orderBy?: Prisma.DeployementOrderByWithAggregationInput | Prisma.DeployementOrderByWithAggregationInput[];
    by: Prisma.DeployementScalarFieldEnum[] | Prisma.DeployementScalarFieldEnum;
    having?: Prisma.DeployementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeployementCountAggregateInputType | true;
    _min?: DeployementMinAggregateInputType;
    _max?: DeployementMaxAggregateInputType;
};
export type DeployementGroupByOutputType = {
    id: string;
    projectId: string;
    status: $Enums.DeployementStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: DeployementCountAggregateOutputType | null;
    _min: DeployementMinAggregateOutputType | null;
    _max: DeployementMaxAggregateOutputType | null;
};
type GetDeployementGroupByPayload<T extends DeployementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeployementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeployementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeployementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeployementGroupByOutputType[P]>;
}>>;
export type DeployementWhereInput = {
    AND?: Prisma.DeployementWhereInput | Prisma.DeployementWhereInput[];
    OR?: Prisma.DeployementWhereInput[];
    NOT?: Prisma.DeployementWhereInput | Prisma.DeployementWhereInput[];
    id?: Prisma.StringFilter<"Deployement"> | string;
    projectId?: Prisma.StringFilter<"Deployement"> | string;
    status?: Prisma.EnumDeployementStatusFilter<"Deployement"> | $Enums.DeployementStatus;
    createdAt?: Prisma.DateTimeFilter<"Deployement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Deployement"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
};
export type DeployementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
};
export type DeployementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DeployementWhereInput | Prisma.DeployementWhereInput[];
    OR?: Prisma.DeployementWhereInput[];
    NOT?: Prisma.DeployementWhereInput | Prisma.DeployementWhereInput[];
    projectId?: Prisma.StringFilter<"Deployement"> | string;
    status?: Prisma.EnumDeployementStatusFilter<"Deployement"> | $Enums.DeployementStatus;
    createdAt?: Prisma.DateTimeFilter<"Deployement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Deployement"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
}, "id">;
export type DeployementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DeployementCountOrderByAggregateInput;
    _max?: Prisma.DeployementMaxOrderByAggregateInput;
    _min?: Prisma.DeployementMinOrderByAggregateInput;
};
export type DeployementScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeployementScalarWhereWithAggregatesInput | Prisma.DeployementScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeployementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeployementScalarWhereWithAggregatesInput | Prisma.DeployementScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Deployement"> | string;
    projectId?: Prisma.StringWithAggregatesFilter<"Deployement"> | string;
    status?: Prisma.EnumDeployementStatusWithAggregatesFilter<"Deployement"> | $Enums.DeployementStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Deployement"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Deployement"> | Date | string;
};
export type DeployementCreateInput = {
    id?: string;
    status?: $Enums.DeployementStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutDeployementInput;
};
export type DeployementUncheckedCreateInput = {
    id?: string;
    projectId: string;
    status?: $Enums.DeployementStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DeployementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDeployementStatusFieldUpdateOperationsInput | $Enums.DeployementStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutDeployementNestedInput;
};
export type DeployementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDeployementStatusFieldUpdateOperationsInput | $Enums.DeployementStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeployementCreateManyInput = {
    id?: string;
    projectId: string;
    status?: $Enums.DeployementStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DeployementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDeployementStatusFieldUpdateOperationsInput | $Enums.DeployementStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeployementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDeployementStatusFieldUpdateOperationsInput | $Enums.DeployementStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeployementListRelationFilter = {
    every?: Prisma.DeployementWhereInput;
    some?: Prisma.DeployementWhereInput;
    none?: Prisma.DeployementWhereInput;
};
export type DeployementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DeployementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeployementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeployementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DeployementCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.DeployementCreateWithoutProjectInput, Prisma.DeployementUncheckedCreateWithoutProjectInput> | Prisma.DeployementCreateWithoutProjectInput[] | Prisma.DeployementUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.DeployementCreateOrConnectWithoutProjectInput | Prisma.DeployementCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.DeployementCreateManyProjectInputEnvelope;
    connect?: Prisma.DeployementWhereUniqueInput | Prisma.DeployementWhereUniqueInput[];
};
export type DeployementUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.DeployementCreateWithoutProjectInput, Prisma.DeployementUncheckedCreateWithoutProjectInput> | Prisma.DeployementCreateWithoutProjectInput[] | Prisma.DeployementUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.DeployementCreateOrConnectWithoutProjectInput | Prisma.DeployementCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.DeployementCreateManyProjectInputEnvelope;
    connect?: Prisma.DeployementWhereUniqueInput | Prisma.DeployementWhereUniqueInput[];
};
export type DeployementUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.DeployementCreateWithoutProjectInput, Prisma.DeployementUncheckedCreateWithoutProjectInput> | Prisma.DeployementCreateWithoutProjectInput[] | Prisma.DeployementUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.DeployementCreateOrConnectWithoutProjectInput | Prisma.DeployementCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.DeployementUpsertWithWhereUniqueWithoutProjectInput | Prisma.DeployementUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.DeployementCreateManyProjectInputEnvelope;
    set?: Prisma.DeployementWhereUniqueInput | Prisma.DeployementWhereUniqueInput[];
    disconnect?: Prisma.DeployementWhereUniqueInput | Prisma.DeployementWhereUniqueInput[];
    delete?: Prisma.DeployementWhereUniqueInput | Prisma.DeployementWhereUniqueInput[];
    connect?: Prisma.DeployementWhereUniqueInput | Prisma.DeployementWhereUniqueInput[];
    update?: Prisma.DeployementUpdateWithWhereUniqueWithoutProjectInput | Prisma.DeployementUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.DeployementUpdateManyWithWhereWithoutProjectInput | Prisma.DeployementUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.DeployementScalarWhereInput | Prisma.DeployementScalarWhereInput[];
};
export type DeployementUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.DeployementCreateWithoutProjectInput, Prisma.DeployementUncheckedCreateWithoutProjectInput> | Prisma.DeployementCreateWithoutProjectInput[] | Prisma.DeployementUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.DeployementCreateOrConnectWithoutProjectInput | Prisma.DeployementCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.DeployementUpsertWithWhereUniqueWithoutProjectInput | Prisma.DeployementUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.DeployementCreateManyProjectInputEnvelope;
    set?: Prisma.DeployementWhereUniqueInput | Prisma.DeployementWhereUniqueInput[];
    disconnect?: Prisma.DeployementWhereUniqueInput | Prisma.DeployementWhereUniqueInput[];
    delete?: Prisma.DeployementWhereUniqueInput | Prisma.DeployementWhereUniqueInput[];
    connect?: Prisma.DeployementWhereUniqueInput | Prisma.DeployementWhereUniqueInput[];
    update?: Prisma.DeployementUpdateWithWhereUniqueWithoutProjectInput | Prisma.DeployementUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.DeployementUpdateManyWithWhereWithoutProjectInput | Prisma.DeployementUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.DeployementScalarWhereInput | Prisma.DeployementScalarWhereInput[];
};
export type EnumDeployementStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeployementStatus;
};
export type DeployementCreateWithoutProjectInput = {
    id?: string;
    status?: $Enums.DeployementStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DeployementUncheckedCreateWithoutProjectInput = {
    id?: string;
    status?: $Enums.DeployementStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DeployementCreateOrConnectWithoutProjectInput = {
    where: Prisma.DeployementWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeployementCreateWithoutProjectInput, Prisma.DeployementUncheckedCreateWithoutProjectInput>;
};
export type DeployementCreateManyProjectInputEnvelope = {
    data: Prisma.DeployementCreateManyProjectInput | Prisma.DeployementCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type DeployementUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.DeployementWhereUniqueInput;
    update: Prisma.XOR<Prisma.DeployementUpdateWithoutProjectInput, Prisma.DeployementUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.DeployementCreateWithoutProjectInput, Prisma.DeployementUncheckedCreateWithoutProjectInput>;
};
export type DeployementUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.DeployementWhereUniqueInput;
    data: Prisma.XOR<Prisma.DeployementUpdateWithoutProjectInput, Prisma.DeployementUncheckedUpdateWithoutProjectInput>;
};
export type DeployementUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.DeployementScalarWhereInput;
    data: Prisma.XOR<Prisma.DeployementUpdateManyMutationInput, Prisma.DeployementUncheckedUpdateManyWithoutProjectInput>;
};
export type DeployementScalarWhereInput = {
    AND?: Prisma.DeployementScalarWhereInput | Prisma.DeployementScalarWhereInput[];
    OR?: Prisma.DeployementScalarWhereInput[];
    NOT?: Prisma.DeployementScalarWhereInput | Prisma.DeployementScalarWhereInput[];
    id?: Prisma.StringFilter<"Deployement"> | string;
    projectId?: Prisma.StringFilter<"Deployement"> | string;
    status?: Prisma.EnumDeployementStatusFilter<"Deployement"> | $Enums.DeployementStatus;
    createdAt?: Prisma.DateTimeFilter<"Deployement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Deployement"> | Date | string;
};
export type DeployementCreateManyProjectInput = {
    id?: string;
    status?: $Enums.DeployementStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DeployementUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDeployementStatusFieldUpdateOperationsInput | $Enums.DeployementStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeployementUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDeployementStatusFieldUpdateOperationsInput | $Enums.DeployementStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeployementUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDeployementStatusFieldUpdateOperationsInput | $Enums.DeployementStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeployementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["deployement"]>;
export type DeployementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["deployement"]>;
export type DeployementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["deployement"]>;
export type DeployementSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DeployementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["deployement"]>;
export type DeployementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type DeployementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type DeployementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type $DeployementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Deployement";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        projectId: string;
        status: $Enums.DeployementStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["deployement"]>;
    composites: {};
};
export type DeployementGetPayload<S extends boolean | null | undefined | DeployementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DeployementPayload, S>;
export type DeployementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeployementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeployementCountAggregateInputType | true;
};
export interface DeployementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Deployement'];
        meta: {
            name: 'Deployement';
        };
    };
    /**
     * Find zero or one Deployement that matches the filter.
     * @param {DeployementFindUniqueArgs} args - Arguments to find a Deployement
     * @example
     * // Get one Deployement
     * const deployement = await prisma.deployement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeployementFindUniqueArgs>(args: Prisma.SelectSubset<T, DeployementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeployementClient<runtime.Types.Result.GetResult<Prisma.$DeployementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Deployement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeployementFindUniqueOrThrowArgs} args - Arguments to find a Deployement
     * @example
     * // Get one Deployement
     * const deployement = await prisma.deployement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeployementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeployementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeployementClient<runtime.Types.Result.GetResult<Prisma.$DeployementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Deployement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeployementFindFirstArgs} args - Arguments to find a Deployement
     * @example
     * // Get one Deployement
     * const deployement = await prisma.deployement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeployementFindFirstArgs>(args?: Prisma.SelectSubset<T, DeployementFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeployementClient<runtime.Types.Result.GetResult<Prisma.$DeployementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Deployement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeployementFindFirstOrThrowArgs} args - Arguments to find a Deployement
     * @example
     * // Get one Deployement
     * const deployement = await prisma.deployement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeployementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeployementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeployementClient<runtime.Types.Result.GetResult<Prisma.$DeployementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Deployements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeployementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deployements
     * const deployements = await prisma.deployement.findMany()
     *
     * // Get first 10 Deployements
     * const deployements = await prisma.deployement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const deployementWithIdOnly = await prisma.deployement.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DeployementFindManyArgs>(args?: Prisma.SelectSubset<T, DeployementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeployementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Deployement.
     * @param {DeployementCreateArgs} args - Arguments to create a Deployement.
     * @example
     * // Create one Deployement
     * const Deployement = await prisma.deployement.create({
     *   data: {
     *     // ... data to create a Deployement
     *   }
     * })
     *
     */
    create<T extends DeployementCreateArgs>(args: Prisma.SelectSubset<T, DeployementCreateArgs<ExtArgs>>): Prisma.Prisma__DeployementClient<runtime.Types.Result.GetResult<Prisma.$DeployementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Deployements.
     * @param {DeployementCreateManyArgs} args - Arguments to create many Deployements.
     * @example
     * // Create many Deployements
     * const deployement = await prisma.deployement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DeployementCreateManyArgs>(args?: Prisma.SelectSubset<T, DeployementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Deployements and returns the data saved in the database.
     * @param {DeployementCreateManyAndReturnArgs} args - Arguments to create many Deployements.
     * @example
     * // Create many Deployements
     * const deployement = await prisma.deployement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Deployements and only return the `id`
     * const deployementWithIdOnly = await prisma.deployement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DeployementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeployementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeployementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Deployement.
     * @param {DeployementDeleteArgs} args - Arguments to delete one Deployement.
     * @example
     * // Delete one Deployement
     * const Deployement = await prisma.deployement.delete({
     *   where: {
     *     // ... filter to delete one Deployement
     *   }
     * })
     *
     */
    delete<T extends DeployementDeleteArgs>(args: Prisma.SelectSubset<T, DeployementDeleteArgs<ExtArgs>>): Prisma.Prisma__DeployementClient<runtime.Types.Result.GetResult<Prisma.$DeployementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Deployement.
     * @param {DeployementUpdateArgs} args - Arguments to update one Deployement.
     * @example
     * // Update one Deployement
     * const deployement = await prisma.deployement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DeployementUpdateArgs>(args: Prisma.SelectSubset<T, DeployementUpdateArgs<ExtArgs>>): Prisma.Prisma__DeployementClient<runtime.Types.Result.GetResult<Prisma.$DeployementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Deployements.
     * @param {DeployementDeleteManyArgs} args - Arguments to filter Deployements to delete.
     * @example
     * // Delete a few Deployements
     * const { count } = await prisma.deployement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DeployementDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeployementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Deployements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeployementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deployements
     * const deployement = await prisma.deployement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DeployementUpdateManyArgs>(args: Prisma.SelectSubset<T, DeployementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Deployements and returns the data updated in the database.
     * @param {DeployementUpdateManyAndReturnArgs} args - Arguments to update many Deployements.
     * @example
     * // Update many Deployements
     * const deployement = await prisma.deployement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Deployements and only return the `id`
     * const deployementWithIdOnly = await prisma.deployement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends DeployementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeployementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeployementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Deployement.
     * @param {DeployementUpsertArgs} args - Arguments to update or create a Deployement.
     * @example
     * // Update or create a Deployement
     * const deployement = await prisma.deployement.upsert({
     *   create: {
     *     // ... data to create a Deployement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deployement we want to update
     *   }
     * })
     */
    upsert<T extends DeployementUpsertArgs>(args: Prisma.SelectSubset<T, DeployementUpsertArgs<ExtArgs>>): Prisma.Prisma__DeployementClient<runtime.Types.Result.GetResult<Prisma.$DeployementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Deployements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeployementCountArgs} args - Arguments to filter Deployements to count.
     * @example
     * // Count the number of Deployements
     * const count = await prisma.deployement.count({
     *   where: {
     *     // ... the filter for the Deployements we want to count
     *   }
     * })
    **/
    count<T extends DeployementCountArgs>(args?: Prisma.Subset<T, DeployementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeployementCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Deployement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeployementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeployementAggregateArgs>(args: Prisma.Subset<T, DeployementAggregateArgs>): Prisma.PrismaPromise<GetDeployementAggregateType<T>>;
    /**
     * Group by Deployement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeployementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends DeployementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeployementGroupByArgs['orderBy'];
    } : {
        orderBy?: DeployementGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeployementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeployementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Deployement model
     */
    readonly fields: DeployementFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Deployement.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DeployementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Deployement model
 */
export interface DeployementFieldRefs {
    readonly id: Prisma.FieldRef<"Deployement", 'String'>;
    readonly projectId: Prisma.FieldRef<"Deployement", 'String'>;
    readonly status: Prisma.FieldRef<"Deployement", 'DeployementStatus'>;
    readonly createdAt: Prisma.FieldRef<"Deployement", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Deployement", 'DateTime'>;
}
/**
 * Deployement findUnique
 */
export type DeployementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployement
     */
    select?: Prisma.DeployementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Deployement
     */
    omit?: Prisma.DeployementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeployementInclude<ExtArgs> | null;
    /**
     * Filter, which Deployement to fetch.
     */
    where: Prisma.DeployementWhereUniqueInput;
};
/**
 * Deployement findUniqueOrThrow
 */
export type DeployementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployement
     */
    select?: Prisma.DeployementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Deployement
     */
    omit?: Prisma.DeployementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeployementInclude<ExtArgs> | null;
    /**
     * Filter, which Deployement to fetch.
     */
    where: Prisma.DeployementWhereUniqueInput;
};
/**
 * Deployement findFirst
 */
export type DeployementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployement
     */
    select?: Prisma.DeployementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Deployement
     */
    omit?: Prisma.DeployementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeployementInclude<ExtArgs> | null;
    /**
     * Filter, which Deployement to fetch.
     */
    where?: Prisma.DeployementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Deployements to fetch.
     */
    orderBy?: Prisma.DeployementOrderByWithRelationInput | Prisma.DeployementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Deployements.
     */
    cursor?: Prisma.DeployementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Deployements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Deployements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Deployements.
     */
    distinct?: Prisma.DeployementScalarFieldEnum | Prisma.DeployementScalarFieldEnum[];
};
/**
 * Deployement findFirstOrThrow
 */
export type DeployementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployement
     */
    select?: Prisma.DeployementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Deployement
     */
    omit?: Prisma.DeployementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeployementInclude<ExtArgs> | null;
    /**
     * Filter, which Deployement to fetch.
     */
    where?: Prisma.DeployementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Deployements to fetch.
     */
    orderBy?: Prisma.DeployementOrderByWithRelationInput | Prisma.DeployementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Deployements.
     */
    cursor?: Prisma.DeployementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Deployements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Deployements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Deployements.
     */
    distinct?: Prisma.DeployementScalarFieldEnum | Prisma.DeployementScalarFieldEnum[];
};
/**
 * Deployement findMany
 */
export type DeployementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployement
     */
    select?: Prisma.DeployementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Deployement
     */
    omit?: Prisma.DeployementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeployementInclude<ExtArgs> | null;
    /**
     * Filter, which Deployements to fetch.
     */
    where?: Prisma.DeployementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Deployements to fetch.
     */
    orderBy?: Prisma.DeployementOrderByWithRelationInput | Prisma.DeployementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Deployements.
     */
    cursor?: Prisma.DeployementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Deployements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Deployements.
     */
    skip?: number;
    distinct?: Prisma.DeployementScalarFieldEnum | Prisma.DeployementScalarFieldEnum[];
};
/**
 * Deployement create
 */
export type DeployementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployement
     */
    select?: Prisma.DeployementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Deployement
     */
    omit?: Prisma.DeployementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeployementInclude<ExtArgs> | null;
    /**
     * The data needed to create a Deployement.
     */
    data: Prisma.XOR<Prisma.DeployementCreateInput, Prisma.DeployementUncheckedCreateInput>;
};
/**
 * Deployement createMany
 */
export type DeployementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deployements.
     */
    data: Prisma.DeployementCreateManyInput | Prisma.DeployementCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Deployement createManyAndReturn
 */
export type DeployementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployement
     */
    select?: Prisma.DeployementSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Deployement
     */
    omit?: Prisma.DeployementOmit<ExtArgs> | null;
    /**
     * The data used to create many Deployements.
     */
    data: Prisma.DeployementCreateManyInput | Prisma.DeployementCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeployementIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Deployement update
 */
export type DeployementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployement
     */
    select?: Prisma.DeployementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Deployement
     */
    omit?: Prisma.DeployementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeployementInclude<ExtArgs> | null;
    /**
     * The data needed to update a Deployement.
     */
    data: Prisma.XOR<Prisma.DeployementUpdateInput, Prisma.DeployementUncheckedUpdateInput>;
    /**
     * Choose, which Deployement to update.
     */
    where: Prisma.DeployementWhereUniqueInput;
};
/**
 * Deployement updateMany
 */
export type DeployementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Deployements.
     */
    data: Prisma.XOR<Prisma.DeployementUpdateManyMutationInput, Prisma.DeployementUncheckedUpdateManyInput>;
    /**
     * Filter which Deployements to update
     */
    where?: Prisma.DeployementWhereInput;
    /**
     * Limit how many Deployements to update.
     */
    limit?: number;
};
/**
 * Deployement updateManyAndReturn
 */
export type DeployementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployement
     */
    select?: Prisma.DeployementSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Deployement
     */
    omit?: Prisma.DeployementOmit<ExtArgs> | null;
    /**
     * The data used to update Deployements.
     */
    data: Prisma.XOR<Prisma.DeployementUpdateManyMutationInput, Prisma.DeployementUncheckedUpdateManyInput>;
    /**
     * Filter which Deployements to update
     */
    where?: Prisma.DeployementWhereInput;
    /**
     * Limit how many Deployements to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeployementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Deployement upsert
 */
export type DeployementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployement
     */
    select?: Prisma.DeployementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Deployement
     */
    omit?: Prisma.DeployementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeployementInclude<ExtArgs> | null;
    /**
     * The filter to search for the Deployement to update in case it exists.
     */
    where: Prisma.DeployementWhereUniqueInput;
    /**
     * In case the Deployement found by the `where` argument doesn't exist, create a new Deployement with this data.
     */
    create: Prisma.XOR<Prisma.DeployementCreateInput, Prisma.DeployementUncheckedCreateInput>;
    /**
     * In case the Deployement was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DeployementUpdateInput, Prisma.DeployementUncheckedUpdateInput>;
};
/**
 * Deployement delete
 */
export type DeployementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployement
     */
    select?: Prisma.DeployementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Deployement
     */
    omit?: Prisma.DeployementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeployementInclude<ExtArgs> | null;
    /**
     * Filter which Deployement to delete.
     */
    where: Prisma.DeployementWhereUniqueInput;
};
/**
 * Deployement deleteMany
 */
export type DeployementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Deployements to delete
     */
    where?: Prisma.DeployementWhereInput;
    /**
     * Limit how many Deployements to delete.
     */
    limit?: number;
};
/**
 * Deployement without action
 */
export type DeployementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployement
     */
    select?: Prisma.DeployementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Deployement
     */
    omit?: Prisma.DeployementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DeployementInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Deployement.d.ts.map