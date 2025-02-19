import { StepEdge, useNodes } from '@xyflow/react'
import React from 'react'
import { SmartEdge } from '../SmartEdge'
import {
	pathfindingJumpPointNoDiagonal,
	svgDrawStraightLinePath
} from '../functions'
import type { SmartEdgeOptions } from '../SmartEdge'
import type { Edge, EdgeProps, Node } from '@xyflow/react'

const StepConfiguration: SmartEdgeOptions = {
	drawEdge: svgDrawStraightLinePath,
	generatePath: pathfindingJumpPointNoDiagonal,
	fallback: StepEdge
}

export function SmartStepEdge<
	EdgeDataType extends Edge<Record<string, unknown>, string | undefined> = Edge<
		Record<string, unknown>,
		string | undefined
	>,
	NodeDataType extends Node['data'] = Node['data']
>(props: EdgeProps<EdgeDataType>) {
	const nodes = useNodes<Node<NodeDataType>>()

	return (
		<SmartEdge<EdgeDataType, NodeDataType>
			{...props}
			options={StepConfiguration}
			nodes={nodes}
		/>
	)
}
