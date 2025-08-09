// import { useClient, useReadContract } from "wagmi";
// import { erc20Abi, parseAbiItem } from 'viem'
// import { useEffect } from "react";
// import { getLogs } from "viem/actions";


const Test = () => {
    return (
        <></>
    )
//     const client = useClient();
//     const firstBlockNumber = BigInt(parseInt('0xacb4dc', 16));
//     const latestBlockNumber = BigInt(parseInt('0xb18523', 16));
//     const address = '0x8E676a690c74d8AEdc26D59E9Ab7bDBaCbBD23f1';
//     const targetFrom = '0xcEdCA7ae1C55E249a087e481317a041E7db27915';

//     const {data, isPending, error} = useReadContract({
//         abi: erc20Abi,
//         address,
//         functionName: 'balanceOf',
//         args: [targetFrom]
//     })

//     useEffect(() => {
//         if (!client) return;
//             console.log(data, isPending, error)
//             const getEvents = async () => {
//                 let current = latestBlockNumber;
//                 const chunk = 5000n;
//                 const results = [];

//                 while (current > firstBlockNumber) {
//                     const fromBlock = current - chunk > firstBlockNumber ? current - chunk : firstBlockNumber;
//                     const toBlock = current;

//                     if (fromBlock >= toBlock) break;

//                     try {
//                         const logs = await getLogs(client, {
//                             address,
//                             event: parseAbiItem('event Transfer(address indexed from, address indexed to, uint256 value)'),
//                             fromBlock,
//                             toBlock,
//                         });


//                         const filtered = logs.filter(log => 
//                             log.args?.from?.toLowerCase() === targetFrom.toLowerCase()
//                         );

//                         if (filtered.length > 0) results.push(...filtered);
//                     } catch (err) {
//                         console.error(`Hata: ${err}`);
//                     }

//                     current = fromBlock - 1n;
//                     await new Promise(r => setTimeout(r, 200)); // rate limit
//                 }

//                 return results;
//             };

//             // const events = getEvents();
//             // events.then(data => {
//             //     console.log("Bulunan tüm eşleşmeler:", data);
//             // }).catch(err => {
//             //     console.log(err);
//             // });
//     }, [isPending]); 

//     return (
//         <>
//             <h1>sa</h1>
//         </>
//     )
};




export default Test;